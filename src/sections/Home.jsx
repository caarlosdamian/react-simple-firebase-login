import app from "../base";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
}
