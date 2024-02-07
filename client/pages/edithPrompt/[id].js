import EditPrompt from "@pages/components/EditPrompt";
import { useRouter } from "next/router";

export default function UpdatePrompt() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <EditPrompt id={id} />
    </div>
  );
}
