import { stacks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

export const Stack = ({ ...props }) => {
  return (
    <div className={cn("flex flex-col space-y-3", props.className)}>
      <h1 className="text-2xl font-semibold">Current Stack:</h1>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-2">
        {stacks.map((stack, index) => (
          <Card key={index} className="h-[350px]">
            <CardHeader>
              <CardTitle>{stack.title}</CardTitle>
              <Separator />
            </CardHeader>

            <CardContent>{stack.content}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
