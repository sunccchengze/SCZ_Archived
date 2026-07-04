export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ ok: true, message: "AI Flashcards is running!" });
}
