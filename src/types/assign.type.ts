export type UpdateAssignStatusPayload = {
  status: "PENDING" | "IN_PROGRESS";
};

export interface CompleteWorkPayload {
  data: {
    proofDescription: string;
  };
  proofImage: File;
}
