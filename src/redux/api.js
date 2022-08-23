// @ts-nocheck
import { start, error, success } from "./slice";
export default async function adduser(user, dis) {
  dis(start());
  try {
    const res = await (
      await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(user),
      })
    ).json();
    dis(success(res));
  } catch {
    dis(error());
  }
}
