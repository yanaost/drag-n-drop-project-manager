export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(evemt: DragEvent): void;
}

export interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
}
