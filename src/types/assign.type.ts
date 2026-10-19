export type UpdateAssignStatusPayload = {
  status: "PENDING" | "IN_PROGRESS";
};

export interface CompleteWorkPayload {
  proofDescription: string;

  proofImage: File;
}
