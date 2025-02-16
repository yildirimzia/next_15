import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="h1-bold">Welcome to the world of Next.js</h1>
      <form className="px-10 pt-[100px]" action={async (formData) => {
        "use server"
        await signOut({ redirectTo: ROUTES.SIGN_IN })
      }}>
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default Home;
