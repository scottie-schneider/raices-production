import { useRouter } from "next/router";
import { stringParser } from "../../../../util/utilityFunctions";

const Index = () => {
  const router = useRouter();
  const { neighborhood } = router.query;

  return (
    <div>
      Congrats, you've reached the deeply nested neighborhood page for{" "}
      {neighborhood && stringParser(neighborhood)}.
    </div>
  );
};
export default Index;
