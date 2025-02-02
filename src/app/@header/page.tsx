import Link from "next/link";
import HeaderNavigator from "./component/navigator";

export default function Page() {
  return (
    <>
      <div className="container mx-auto mt-6">
        <div className="flex justify-end">
          <span className="text-xs text-gray-400 p-1">Sign In</span>
          <span className="text-xs text-gray-400 p-1">Sign Up</span>
        </div>
      </div>
      <div className="container mx-auto mb-6">
        <div className="flex justify-between">
          <div className="basis-1/6">
            <Link href={`/`}><span className="text-xl">Realdev-Learning</span></Link>
          </div>
          <div className="basis-1/3">
            <HeaderNavigator/>
          </div>
        </div>
      </div>
    </>
  );
}