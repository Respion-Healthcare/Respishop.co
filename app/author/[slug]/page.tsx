import { redirect } from "next/navigation";

export default function AuthorRedirect() {
  redirect("/blog");
}