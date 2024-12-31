export default function initDrag($sheet, $board) {
    const handleAddDragging = (event) => {
        console.log("드래그 중");
        document.body.style.userSelect = "none";
        traceCursor(event, $sheet, $board);
    };
    const handleRemoveDragging = () => {
        console.log("드래그 기능 끝");
        document.body.style.userSelect = "auto";
        document.removeEventListener("pointermove", handleAddDragging);
        document.removeEventListener("pointerup", handleRemoveDragging);
    };
    document.addEventListener("pointermove", handleAddDragging);
    document.addEventListener("pointerup", handleRemoveDragging);
}

function traceCursor(event, $sheet, $board) {
    const rect = $board.getBoundingClientRect();
    const x = event.clientX - rect.x;
    const y = event.clientY - rect.y;

    $sheet.style.left = `${x - $sheet.offsetWidth / 2}px`;
    $sheet.style.top = `${y}px`;
    // console.log(x, y);
}
