"use client";

import { useSingleComplain } from "@/hooks/complain.hook";
import { useParams } from "next/navigation";

const ComplainDetailsPage = () => {
  const params = useParams();

  const { data } = useSingleComplain(params.id as string);
  console.log(data);

  return (
    <div>
      <h1>This is Complain Details page</h1>
    </div>
  );
};

export default ComplainDetailsPage;
