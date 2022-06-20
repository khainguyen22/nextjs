import { useRouter } from "next/router";
import * as React from "react"
const ProductID = () => {
    const router = useRouter();
    const a = JSON.stringify(router.query);
    console.log(a)
	return (
		<div>
			<h3>Product Detail</h3>
            <p>Query: {a}</p> <div> <button type="button" onClick={() => router.push('/about')}>
				Click me
			</button>
			<button type="button" onClick={() => router.push('/about')}>
				Click me
			</button>
			<button type="button" onClick={() => router.push('/about')}>
				Click me
			</button>
			</div>
		</div>
	);
};

export default ProductID;
