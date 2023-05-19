import { Button } from "flowbite-react";

export default function ButtonCom (){
    return (
        <div className="flex flex-wrap gap-2">
        <div>
            <Button gradientDuoTone="purpleToBlue">
            Purple to Blue
            </Button>
        </div>
        <div>
            <Button gradientDuoTone="cyanToBlue">
            Cyan to Blue
            </Button>
        </div>
        <div>
            <Button gradientDuoTone="greenToBlue">
            Green to Blue
            </Button>
        </div>
        <div>
            <Button gradientDuoTone="purpleToPink">
            Purple to Pink
            </Button>
        </div>
        <div>
            <Button gradientDuoTone="pinkToOrange">
            Pink to Orange
            </Button>
        </div>
        <div>
            <Button gradientDuoTone="tealToLime">
            Teal to Lime
            </Button>
        </div>
        <div>
            <Button gradientDuoTone="redToYellow">
            Red to Yellow
            </Button>
        </div>
        </div>
    )
}