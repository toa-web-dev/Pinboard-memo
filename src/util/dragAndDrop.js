export default function initDragging($pin, $sheet, $board) {
    const rect = $board.getBoundingClientRect();

    $pin.addEventListener("pointerdown", dragStart);
    $pin.addEventListener("pointerup", dragEnd);

    function traceCursor(event) {
        const x = event.clientX - rect.x;
        const y = event.clientY - rect.y;

        $sheet.style.left = `${x}px`;
        $sheet.style.top = `${y}px`;
        $sheet.style.transform = "translate( -50%,0)";
        console.log(x, y);
    }
    function dragStart() {
        window.addEventListener("mousemove", traceCursor);
    }
    function dragEnd() {
        window.removeEventListener("mousemove", traceCursor);
    }
}
