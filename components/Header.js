import styled from "styled-components";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
const Cont = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-around;
`;

const Header = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <Cont>
      <Link passHref href={{ pathname: "/" }}>
        <a rel="noreferrer noopener">
          <h1>Home</h1>
        </a>
      </Link>
      <Link passHref href={{ pathname: "/blogs" }}>
        <a rel="noreferrer noopener">
          <h1>Blogs</h1>
        </a>
      </Link>
      <Link passHref href={{ pathname: "/about" }}>
        <a rel="noreferrer noopener">
          <h1>About</h1>
        </a>
      </Link>
      {session ? (
        <div>
          <p>{session?.user?.name}</p>
          <button>Sign Out</button>
        </div>
      ) : (
        <button onClick={signIn} className="sign-in">
          Sign in
        </button>
      )}
    </Cont>
  );
};

export default Header;
