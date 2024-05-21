import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { stacks } from "@/lib/data";
import { Plus, PlusCircle, Search, X } from "lucide-react";
import Link from "next/link";

const Page = () => (
  <div className="h-full flex flex-col items-center justify-center gap-3 ">
    <div className="flex flex-col justify-start w-[90%] h-[10%] gap-4 my-4 ">
      <div className="flex w-full items-center space-x-3">
        <div className="text-3xl font-semibold">Stacks</div>
        <Plus />
      </div>
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-8 w-full"
              // onChange={(e) => setSearch({ search: e.target.value })}
              value={""}
              // disabled={!submissions}
            />
            {/* {search && (
              <XCircle
                className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer"
                onClick={clearSearch}
                visibility={search.search ? "visible" : "hidden"}
              />
            )} */}
          </div>
        </form>
      </div>
    </div>

    <div className="py-4 w-[90%] h-[75%] space-y-4 overflow-auto ">
      {stacks.map((stack: StackType, index: number) => {
        return (
          // <Link href={stack.title}>
            <Card
              className="bg-secondary ring-1 ring-border  rounded-xl h-[350px]  shadow-sm"
              key={stack.title}
            >
              <CardHeader>
                <CardTitle>{stack.title}</CardTitle>
                {stack.description ? (
                  <CardDescription>{stack.description}</CardDescription>
                ) : null}

                <Separator />
              </CardHeader>

              <CardContent>{stack.content}</CardContent>
            </Card>
          // </Link>
        );
      })}
    </div>
  </div>
);

export default Page;
