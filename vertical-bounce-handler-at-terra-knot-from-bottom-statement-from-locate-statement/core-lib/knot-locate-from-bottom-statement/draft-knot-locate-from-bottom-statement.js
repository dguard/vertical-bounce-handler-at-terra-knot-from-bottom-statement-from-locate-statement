
// keep

function Traversar() {
    let that = this

    that.traverseFromBottomStatementAtTopLeft = function (pointerBelongings, connectedKnot) {

    }
    that.traverseFromBottomStatementAtBottomLeft = function () {

    }
    that.traverseFromBottomStatementAtBottomRight = function () {

    }
    that.traverseFromBottomStatementAtTopRight = function () {

    }

    that.useKnotRelativeSize = function () {

    }
    that.startTraversaring = function () {
        // connectedKnot
        let traversar = that

        // event on knot relative size begin
        // connectedKnot
        // .captureFromBottomStatementAtTopLeft(pointerBelongingsAtTopLeft)
        // .captureFromBottomStatementAtBottomLeft(pointerBelongingsAtBottomLeft)
        // .captureFromBottomStatementAtBottomRight(pointerBelongingsAtBottomRight)
        // .captureFromBottomStatementAtRightTop(pointerBelongingsAtTopRight)
        // .useRelativeSize(knotRelativeSize, traversar)
        // .takeCapture()

        // event on knot relative size completed
    }
}

function echoLocatorAtKnotLocate() {
    let that = this

    // knotFromBottomStatementAtTopLeft
    // knotFromBottomStatementAtBottomLeft
    // knotFromBottomStatementAtBottomRight
    // knotFromBottomStatementAtRightTop
    //
    // knotAtProfile
    //
    // knotAtFront
    // knotFromBottomStatement
    //
    // use knotLocate
    let knotRelativeSize
    that.useRelativeSize = function (knot) {
        knotRelativeSize = knot
    }

    that.traverseInteractionToKnotAtProfile = function (knotConnectedToProfile) {
        // use knotRelativeSize

        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knot.throughPointerBelongingsAtTopLeft, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomLeft(knot.throughPointerBelongingsAtBottomLeft, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomRight(knot.throughPointerBelongingsAtBottomRight, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtTopRight(knot.throughPointerBelongingsAtTopRight, knotConnectedToProfile.throughConnectedKnot)
            .useKnotRelativeSize(knotRelativeSize)
            .startTraversaring()
    }


    that.traverseInteractionToKnotAtFront = function (knotConnectedToFront) {
        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knot.throughPointerBelongingsAtTopLeft, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomLeft(knot.throughPointerBelongingsAtBottomLeft, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomRight(knot.throughPointerBelongingsAtBottomRight, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtTopRight(knot.throughPointerBelongingsAtTopRight, knotConnectedToFront.throughConnectedKnot)
            .useKnotRelativeSize(knotRelativeSize)
            .startTraversaring()
    }
    that.traverseInteractionToKnotFromBottomStatement = function (knotConnectedToBottomStatement) {
        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knot.throughPointerBelongingsAtTopLeft, knotConnectedToBottomStatement.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomLeft(knot.throughPointerBelongingsAtBottomLeft, knotConnectedToBottomStatement.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomRight(knot.throughPointerBelongingsAtBottomRight, knotConnectedToBottomStatement.throughConnectedKnot)
            .traverseFromBottomStatementAtTopRight(knot.throughPointerBelongingsAtTopRight, knotConnectedToBottomStatement.throughConnectedKnot)
            .useKnotRelativeSize(knotRelativeSize)
            .startTraversaring()
    }

    // do you want to take fish and use pointerBelongings? knot above
    // vik ! release pointerBelongings
    that.connectTo = function (knot) {
        that.traverseInteractionToKnotAtProfile(knot.throughKnotConnectedToProfile)

        that.traverseInteractionToKnotAtFront(knot.throughKnotConnectedToFront)
        that.traverseInteractionToKnotFromBottomStatement(knot.throughKnotConnectedToBottomStatement)
    }

}

function KnotAtProfileStatement() {
    let that = this

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}


function KnotAtFrontStatement() {
    let that = this

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}
function KnotFromBottomStatement(pencil) {
    let that = this

    pencil.rememberSample(that.provideKnot())

    that.takeCapture = function () {
        // keep

        // use knot relative size
        // use pointer belongings

        pencil.draw()
    }
    that.provideKnot = function () {
        return that
    }

    that.captureFromBottomStatementAtTopLeft = function () {

    }
    that.captureFromBottomStatementAtBottomLeft = function () {

    }
    that.captureFromBottomStatementAtBottomRight = function () {

    }
    that.captureFromBottomStatementAtRightTop = function () {

    }

    that.useRelativeSize = function (knotRelativeSize, traversar) {
        // keep !
        // use knot relative size
        // use pointer belongings
    }

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}

function knotLocate() {
    let that = this

    that.assignCoordinates = function () {
        // keep
    }

    that.constructPointerBelongings = function () {
        let that = this

        // throughPointerBelongingsAtTopLeft
        // throughPointerBelongingsAtBottomLeft
        // throughPointerBelongingsAtBottomRight
        // throughPointerBelongingsAtTopRight
    }

    that.assignKnotToKnotAtProfileStatement = function (knotAtProfileStatement) {
        that.throughKnotConnectedToProfile = knotAtProfileStatement
    }

    that.assignKnotToKnotAtFrontStatement = function (knotAtFrontStatement) {
        that.throughKnotConnectedToFront = knotAtFrontStatement
    }

    that.assignKnotToKnotFromBottomStatement = function (knotFromBottomStatement) {
        that.throughKnotConnectedToBottomStatement = knotFromBottomStatement
    }
}

function Pencil() {
    let that = this

    // keep
    let knot

    that.useKnot = function (knotInstance) {
        knot = knotInstance
    }

    that.useEchoLocator = function (echoLocator) {
        that.echoLocator = echoLocator

        that.echoLocator.connectTo(knot)
    }

    that.draw = function () {

    }

}