import type { NextPage } from 'next'
import { useEffect, useState, useMemo, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";
import { Container, Row, Col, Nav } from 'react-bootstrap'
import styled from 'styled-components'
import Button from './components/button'
import useConstructor from './components/useConstructor';

const Home: NextPage = () => {
  useConstructor(() => {
    console.log("constructor");
  });
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  useMemo(() => {
    // console.log(visible);
  }, [])
  const inputRef = useRef(null);
  const FuncInputRef = () => {
    const input = inputFile.current as HTMLInputElement;
    input.click();
  }
  const inputFile = useRef(null);
  const inputText = useRef(null);
  const [Count, setCount] = useState(0);
  const count = () => {
    setCount((a) => a + 1);
  };
  return (
    <Container >
      <main >
        <input ref={inputFile} type="file" />
        <input ref={inputText} type="text" />
        <button type="button" onClick={() => FuncInputRef()}>
          File
        </button>
        <button type="button" onClick={() => {
          const input = document.querySelector('input[type="text"]') as HTMLBaseElement;
          input.focus();
        }}>
          File1
        </button>
        <p>Count: {Count}</p>
        <button type="button" onClick={() => count()}>
          Count
        </button>
        <button type="button" onClick={() => router.push('/laddingPage')}>
          About
        </button>
        <button type="button" onClick={() => { visible == true ? setVisible(false) : setVisible(true) }}>{visible == true ? "Hidden button" : "Show button"}</button>
        {visible && <Button />}
        <div style={{ height: "1000px" }}></div>
        <Link href="/about">
          <Nav.Link> Click me</Nav.Link>
        </Link>
      </main>
    </Container>
  )
}
export default Home
