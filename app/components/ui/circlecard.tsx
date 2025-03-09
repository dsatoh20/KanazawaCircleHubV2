
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import CircleDrawer from "./circledrawer";

interface CircleCardProps {
    item: Circle;
};
  
export default function CircleCard({item}: CircleCardProps) {
    return (
        <Card className="flex flex-row h-[130px] w-full">
        <CardContent className="w-[130px]">
            <img src={item.profileImage}
             alt={item.circleName} 
             className="w-full h-full object-cover rounded-l-md" />
        </CardContent>
        <div className="flex flex-col h-full w-full">
        <CardHeader>
            <CardTitle className="">{item.circleName}</CardTitle>
            <CardDescription className="h-[40px] overflow-hidden text-ellipsis">{item.activityDetails.summary}</CardDescription>
        </CardHeader>
        <CardFooter className="justify-end pr-4 py-2">
            <CircleDrawer item={item} />

        </CardFooter>
        </div>
        
        </Card>

    )
}