import { redirect } from "@sveltejs/kit";

export function GET() {
    return redirect(302, "https://www.youtube.com/channel/UCWfwmiYGlXXunsUc1Zvz8SQ");
}
