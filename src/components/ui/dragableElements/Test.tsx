import Card, { CardColors } from "../containers/cards/card/Card";

const Test = (props: TestProps) => {
    const onDragHandler = (elem: any) =>{ 
        // console.log("onDragHandler")
        // console.log(elem);
    }

    const onDragEnterHandler = (elem: any) =>{ 
        console.log("onDragEnterHandler")
        console.log(elem);
    }

    const onDragEndHandler = (elem: any) =>{
        console.log("onDragEndHandler")
        console.log(elem);
    }

    const onDropHandler = (elem: any) =>{
        console.log("onDropHandler")
        console.log(elem);
    }

    return (
        <div draggable onDrag={onDragHandler}  onDragEnter={onDragEnterHandler} onDragEnd={onDragEndHandler} onDrop={onDropHandler}>
            <Card color={CardColors.green}>{props.children}</Card>
        </div>
    );
};

class TestProps{
    children?: any;
}

export default Test;
