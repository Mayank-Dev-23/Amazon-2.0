import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/react";
import Head from "next/head"

const override = css`
  width: 300px;
`;

function Loading({ loading }) {
  return (
    <div className="loadercontainer">
        <Head>
            <title>
                Amazon
            </title>
            </Head>
      <div className="img">
        <img src="/loader.png" width={300} height={200} />
      </div>
      <BarLoader
        color={"#febd69"}
        loading={loading}
        css={override}
        size={320}
        height={6}
      />
    </div>
  );
}

export default Loading;
