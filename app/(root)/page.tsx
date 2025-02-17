import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ROUTES from "@/constants/routes";
const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button className="primary-gradient min-h-[46px] !text-light-900 px-8 py-3">
          <Link href={ROUTES.ASK_QUESTION}>
            Ask a question
          </Link>
        </Button>
      </section>

      <section>
        Local Search
      </section>


      <div className="mt-10 flex w-full flex-col gap-6">
        card1
      </div>
    </>
  );
};

export default Home;
