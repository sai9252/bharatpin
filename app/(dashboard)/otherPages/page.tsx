// app/otherPages/page.js

import { redirect } from "next/navigation";

export default function DefaultOtherPage() {
  // Redirect to the aboutus page when accessing the root otherPages route
  redirect("/otherPages/aboutUs");
}