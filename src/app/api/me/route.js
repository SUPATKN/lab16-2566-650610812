import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Supatkorn Pundontong",
    studentId: "650610812",
  });
};
