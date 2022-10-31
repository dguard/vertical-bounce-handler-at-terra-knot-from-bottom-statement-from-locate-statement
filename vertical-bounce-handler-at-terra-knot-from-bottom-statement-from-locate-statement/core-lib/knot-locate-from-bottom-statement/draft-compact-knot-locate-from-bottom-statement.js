
// keep

function Traversar() {
    let that = this

    let connectedKnot

    that.traverseFromBottomStatementAtTopLeft = function (pointerBelongings, connectedKnotInstance) {
        // keep
        let traversar = that

        // keep !
        connectedKnot = connectedKnotInstance

        that.pointerBelongingsAtTopLeft = pointerBelongings
        // keep !

        return traversar
    }
    that.traverseFromBottomStatementAtBottomLeft = function (pointerBelongings, connectedKnotInstance) {
        let traversar = that
        // keep
        that.pointerBelongingsAtBottomLeft = pointerBelongings

        // keep !

        return traversar
    }
    that.traverseFromBottomStatementAtBottomRight = function (pointerBelongings, connectedKnotInstance) {
        let traversar = that
        // keep
        that.pointerBelongingsAtBottomRight = pointerBelongings

        // keep !

        return traversar
    }
    that.traverseFromBottomStatementAtRightTop = function (pointerBelongings, connectedKnotInstance) {
        let traversar = that
        // keep !
        that.pointerBelongingsAtRightTop = pointerBelongings

        // keep

        return traversar
    }

    let pointerBelongingsAtKnotRelativeSize
    that.throughPointerBelongingsAtKnotRelativeSize = function (pointerBelongingsAtKnotRelativeSizeInstance) {
        let traversar = that
        // keep !
        pointerBelongingsAtKnotRelativeSize = pointerBelongingsAtKnotRelativeSizeInstance

        // keep

        return traversar
    }

    let knotRelativeSize

    that.passThrough = function (connectedKnotInstance, fz) {
        let traversar = that

        fz()

        return traversar
    }

    that.passThroughRelativeSize = function (knotRelativeSizeInstance) {
        let traversar = that

        return traversar
    }

    that.useKnotRelativeSize = function (knotRelativeSizeInstance) {
        let traversar = that
        // keep !
        knotRelativeSize = knotRelativeSizeInstance

        // keep

        return traversar
    }
    // keep !
    // traversarIN ! \g // soul \ mine
    that.startTraversaring = function () {
        // connectedKnot
        let traversar = that

        that.passThroughRelativeSize(knotRelativeSize).passThrough(connectedKnot, function () {
            // event on knot relative size begin

            pointerBelongingsAtKnotRelativeSize.throughCtx(/* keep */).throughInteraction(function(ctx) {

                connectedKnot
                .useCtx(ctx)
                .captureFromBottomStatementAtTopLeft(that.pointerBelongingsAtTopLeft)
                .captureFromBottomStatementAtBottomLeft(that.pointerBelongingsAtBottomLeft)
                .captureFromBottomStatementAtBottomRight(that.pointerBelongingsAtBottomRight)
                .captureFromBottomStatementAtRightTop(that.pointerBelongingsAtRightTop)
                .throughCtx(ctx)
                .useRelativeSize(knotRelativeSize, traversar)
                .takeCapture()

                // that \ spars tree ! \m
            })
            // event on knot relative size completed
        })
    }
}

function PointerBelongingsAtKnotRelativeSize(knotRelativeSize) {
    let that = this

    let ctx

    that.throughInteraction = function (fy) {
        let pointerBelongings = that

        fy(ctx)

        return pointerBelongings
    }

    that.throughCtx = function () {
        let pointerBelongings = that
        ctx = knotRelativeSize.connectedToCanvas.ctx

        return pointerBelongings
    }
}

function KnotLocateFromBottomStatement() {
    let that = this
    // keep

    that.compute = function () {

    }
}

function EchoLocatorAtKnotLocate() {
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

    let pointerBelongings
    that.usePointerBelongings = function (pointerBelongingsInstance) {
        pointerBelongings = pointerBelongingsInstance
    }

    that.traverseInteractionToKnotAtProfile = function (knotConnectedToProfile) {
        // use knotRelativeSize
        let knot = knotConnectedToProfile

        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knot.throughPointerBelongingsAtTopLeft, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomLeft(knot.throughPointerBelongingsAtBottomLeft, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomRight(knot.throughPointerBelongingsAtBottomRight, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtTopRight(knot.throughPointerBelongingsAtTopRight, knotConnectedToProfile.throughConnectedKnot)
            .useKnotRelativeSize(knotRelativeSize)
            .throughPointerBelongingsAtKnotRelativeSize(pointerBelongings)
            .startTraversaring()
    }


    that.traverseInteractionToKnotAtFront = function (knotConnectedToFront) {
        let knot = knotConnectedToFront

        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knot.throughPointerBelongingsAtTopLeft, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomLeft(knot.throughPointerBelongingsAtBottomLeft, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomRight(knot.throughPointerBelongingsAtBottomRight, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtTopRight(knot.throughPointerBelongingsAtTopRight, knotConnectedToFront.throughConnectedKnot)
            .useKnotRelativeSize(knotRelativeSize)
            .throughPointerBelongingsAtKnotRelativeSize(pointerBelongings)
            .startTraversaring()
    }
    that.traverseInteractionToKnotFromBottomStatement = function (knotConnectedToBottomStatement) {
        let knot = knotConnectedToBottomStatement

        // keep
        ;
        // keep !

        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knotRelativeSize.throughPointerBelongingsAtTopLeft, /* keep */ knotConnectedToBottomStatement /* keep .throughConnectedKnot */)
            .traverseFromBottomStatementAtBottomLeft(knotRelativeSize.throughPointerBelongingsAtBottomLeft, /* keep */ knotConnectedToBottomStatement /* keep .throughConnectedKnot */)
            .traverseFromBottomStatementAtBottomRight(knotRelativeSize.throughPointerBelongingsAtBottomRight, /* keep */ knotConnectedToBottomStatement /* keep .throughConnectedKnot */)
            .traverseFromBottomStatementAtRightTop(knotRelativeSize.throughPointerBelongingsAtRightTop, /* keep */ knotConnectedToBottomStatement /* keep .throughConnectedKnot */)
            .useKnotRelativeSize(knotRelativeSize)
            .throughPointerBelongingsAtKnotRelativeSize(pointerBelongings)
            .startTraversaring()
    }

    // do you want to take fish and use pointerBelongings? knot above
    // vik ! release pointerBelongings
    that.connectTo = function (knot) {
        // keep !
        // that.traverseInteractionToKnotAtProfile(knot.throughKnotConnectedToProfile)

        // that.traverseInteractionToKnotAtFront(knot.throughKnotConnectedToFront)
        that.traverseInteractionToKnotFromBottomStatement(knot.throughKnotConnectedToBottomStatement)

        // keep !
    }

}

function KnotAtProfileStatement() {
    let that = this

    // follow KnotFromBottomStatement

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}

function KnotLocatePayloadComputed() {
    let that = this

    let queuePayload = []

    that.payloadFrom = function () {
        // keep
    }
    that.put = function () {
        // keep
    }

    that.compute = function () {
        // keep
    }
}

function KnotLocateStickd() {
    let that = this

    let queueStickd = []
    that.locateFrom = function (y, x) {
        // keep
    }

    that.put = function (pointerBelongings) {
        // keep
    }
    that.compute = function () {
        // keep
    }
}

function KnotAtFrontStatement() {
    let that = this

    // follow KnotFromBottomStatement

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}
function KnotFromBottomStatement(pencil) {
    let that = this

    // keep !
    // pencil.rememberSample(that.provideKnot())
    let fromEmptySpawnedPointerBelongins = function () {
        // keep
        return null
    }

    let passThrough = function () {
        // keep !
    }

    that.passThrough = passThrough

    that.spawnedPointerBelongings = fromEmptySpawnedPointerBelongins()

    that.highlightPointerBelongings = function (highlightPointerBelongingsAtTopLeft, highlightPointerBelongingsAtBottomLeft, highlightPointerBelongingsAtBottomRight, highlightPointerBelongingsAtRightTop) {
        that.pointerBelongingsAtTopLeft = highlightPointerBelongingsAtTopLeft
        that.pointerBelongingsAtBottomLeft = highlightPointerBelongingsAtBottomLeft
        that.pointerBelongingsAtBottomRight = highlightPointerBelongingsAtBottomRight
        that.pointerBelongingsAtRightTop = highlightPointerBelongingsAtRightTop
    }

    that.throughCtx = function (ctx) {
        let knotFromBottomStatement = that

        // keep
        knotFromBottomStatement.ctx.addEventListener('mouseover', function(event) {
            let providedY = event.clientY
            let providedX = event.clientX

            let pointerBelongingsAtKnot = document.querySelector('.statement-from-bounced').querySelector('.pointer-belongings-at-knot')

            if(that.pointerBelongingsAtTopLeft.y >= providedY && that.pointerBelongingsAtTopLeft.x >= providedX
                && that.pointerBelongingsAtBottomLeft.y >= providedY && that.pointerBelongingsAtBottomLeft.x >= providedX
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtRightTop.y <= providedY && that.pointerBelongingsAtRightTop.x <= providedX
            ) {
                pointerBelongingsAtKnot.style.top = event.clientY
                pointerBelongingsAtKnot.style.left = event.clientX

            }
        })

        let dictSpawnFromBottomStatement = {}
        // that's is program style, knot human style
        let queueSpawnFromBottomStatementComputed = []

        let knotSelected

        // knotLocate
        // knotLocateFromBottomStatement

        // stackLocator

        // let me think
        // we cannot use pencil here
        // pencilThroughComputed
        // knotFromComputed

        let dcsTar = pencil

        let accuratePencil = dcsTar.fromAccuratePencil()

        let knotLocateStickd = new KnotLocateStickd()
        let sceneSpawnPointerBelongings = new SceneSpawnPointerBelongings()

        let knotLocatePayload = new KnotLocatePayloadComputed()

        // keep !
        knotFromBottomStatement.ctx.addEventListener('click', function (event) {
            let providedY = event.clientY
            let providedX = event.clientX

            // traversar sends straight request
            // and receives flipped request

            let pointerBelongingsAtKnot = document.querySelector('.statement-from-bounced').querySelector('.pointer-belongings-at-knot')

            // pointerBelongingsAtKnot.style.top = providedY
            // pointerBelongingsAtKnot.style.left = providedX
            // you see, there is double save ! don't speak on phone anymore . please . !
            // use telegram !
            if(['intoKnotLocate'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from belowConnected
                // normalizedKnotBelow

                // keep
            }

            if(['intoKnotFromBottomStatement'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from connected
                // normalizedKnot

                // keep
            }

            if(['intoKnotFromProfile'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from profileConnected
                // normalizedProfileKnot

                // keep
            }

            if(['intoKnotFromFront'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from frontConnected
                // normalizedFrontKnot

                // keep
            }

            if(['connectThrough'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from connected

                // normalizedKnot

                // keep
                // atKnotFromComputed below knotAbove

                // accuratePencil.draw()
            }


            if(['pointerFromProfile'].indexOf(knotSelected) !== -1) {
                // atPointerBelongingsFromKnotFromComputed

                let pointerBelongings = new PoimterBelongingsAtKnotFromProfile()

                let pointerBelongingsFromBottomStatement = accuratePencil.atPointerBelongingsFromBottomStatement()

                pointerBelongings.fromBottomStatement(pointerBelongingsFromBottomStatement)
                pointerBelongings.assignCoordinates(providedY, providedX)

                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, pointerBelongings)
                accuratePencil.useScene(sceneSpawnPointerBelongings)

                accuratePencil.draw()

                return /* keep */
            }

            if(['pointerFromFront'].indexOf(knotSelected) !== -1) {
                // atPointerBelongingsFromKnotFromComputed
            }

            // dictSpawnFromBottomStatement
            let knotFound = knotLocateStickd.locateFrom(providedY, providedX)
            knotFound && (knotSelected = 'selectKnotLocate')

            if(['selectKnotLocate'].indexOf(knotSelected) !== -1) {
                // keep
                // knotFromComputed below knotAbove

                // dictSpawnFromBottomStatement contains y, x

                // we cannot get payload in real world, only in computed
                knotPayload = knotLocatePayloadComputed.payloadFrom(knotFound.id)

                // knotComputed updated with knotPayload
                // change status for knotFromComputed
            }

            if(['spawnPointer'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove
                // keep
            }

            // its actually heap, but we are using programmic style with dict
            dictSpawnFromBottomStatement[JSON.stringify({y: providedY, x: providedX})] = { y: providedY, x: providedX }

            let pointerBelongingsAtKnotLocate = new PointerBelongingsAtKnotFromBottomStatement()
            pointerBelongingsAtKnotLocate.assignCoordinates(providedY, providedX)

            pointerBelongingsAtKnotLocate.compute()

            accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, pointerBelongingsAtKnotLocate)
            accuratePencil.useScene(sceneSpawnPointerBelongings)

            let pointerBelongingsFromFront = pointerBelongingsAtKnotLocate.getPointerBelongingsFromFrontStatement()

            dictSpawnFromBottomStatement[JSON.stringify({y: providedY, x: providedX})]['pointerBelongings'] = pointerBelongingsFromFront
            // keep memory protect

            knotLocateStickd.put(pointerBelongingsFromFront)

            // keep
            knotLocatePayloadComputed.put(pointerBelongingsFromFront.id, /* payload details */)

            // sorry, it's knot \karmic

            // keep
            accuratePencil.draw()

            return /* keep */

            // pointerBelongingsAtKnot.style.top = providedY
            // pointerBelongingsAtKnot.style.left = providedX

            // keep ! rememberSpawn

            if(that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
                && providedY <= that.pointerBelongingsAtBottomLeft.y /* keep ! */ && providedX >= that.pointerBelongingsAtBottomLeft.x
                && providedY <= that.pointerBelongingsAtBottomRight.y && providedX <= that.pointerBelongingsAtBottomRight.x
                && that.pointerBelongingsAtRightTop.y <= providedY && providedX <= that.pointerBelongingsAtRightTop.x) {

            }

            // keep
            if(that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
                && providedY <= that.pointerBelongingsAtBottomLeft.y && providedX <= that.pointerBelongingsAtBottomLeft.x
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
            ) {

            }
            // keep !

            // you remember straight
            // and flipped

            // keep !

            if(that.pointerBelongingsAtTopLeft.y >= providedY && that.pointerBelongingsAtTopLeft.x >= providedX
                && that.pointerBelongingsAtBottomLeft.y >= providedY && that.pointerBelongingsAtBottomLeft.x >= providedX
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtRightTop.y <= providedY && that.pointerBelongingsAtRightTop.x <= providedX
            ) {
                // stack
                // construct preview knot
                // drawLineFromBottomStatement

                // drawLineAtFrontStatement
                // drawLineAtProfileStatement

                // pencil.draw()
                // keep !
            }
            // use double save
        })

        // mouseover tooltip -> selectKnotLocateThroughClick -> useThroughClick -> connect

        // mouseover connectThrough tooltip intoKnotFromProfile
        // mouseover connectThrough toolip intoKnotFromFront

        // mouseover stabilizePointer
        // mouseover connectThrough tooltip intoKnotFromBottomStatement
        // keep ! dictSpawnFromBottomStatement, dictPointerFromFront, dictPointerFromProfile

        // keep knotFromBottomStatement

        return knotFromBottomStatement /* keep */

        // keep
        knotFromBottomStatement.ctx.addEventListener('mouseover', function(event) {
            let providedY = event.clientY
            let providedX = event.clientX

            let pointerBelongingsAtKnot = document.querySelector('.statement-from-bounced').querySelector('.pointer-belongings-at-knot')

            if(that.pointerBelongingsAtTopLeft.y >= providedY && that.pointerBelongingsAtTopLeft.x >= providedX
                && that.pointerBelongingsAtBottomLeft.y >= providedY && that.pointerBelongingsAtBottomLeft.x >= providedX
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtRightTop.y <= providedY && that.pointerBelongingsAtRightTop.x <= providedX
            ) {
                pointerBelongingsAtKnot.style.top = event.clientY
                pointerBelongingsAtKnot.style.left = event.clientX

            }
        })
        // keep !

        knotFromBottomStatement.ctx.addEventListener('click', function (event) {
            let providedY = event.clientY
            let providedX = event.clientX

            // traversar sends straight request
            // and receives flipped request

            let pointerBelongingsAtKnot = document.querySelector('.statement-from-bounced').querySelector('.pointer-belongings-at-knot')

            // pointerBelongingsAtKnot.style.top = providedY
            // pointerBelongingsAtKnot.style.left = providedX
            // you see, there is double save ! don't speak on phone anymore . please . !
            // use telegram !
            pointerBelongingsAtKnot.style.top = providedY
            pointerBelongingsAtKnot.style.left = providedX

            // keep ! rememberSpawn

            if(that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
                && providedY <= that.pointerBelongingsAtBottomLeft.y /* keep ! */ && providedX >= that.pointerBelongingsAtBottomLeft.x
                && providedY <= that.pointerBelongingsAtBottomRight.y && providedX <= that.pointerBelongingsAtBottomRight.x
                && that.pointerBelongingsAtRightTop.y <= providedY && providedX <= that.pointerBelongingsAtRightTop.x) {

            }

            // keep
            if(that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
                && providedY <= that.pointerBelongingsAtBottomLeft.y && providedX <= that.pointerBelongingsAtBottomLeft.x
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
            ) {

            }
            // keep !

            // you remember straight
            // and flipped

            // keep !

            if(that.pointerBelongingsAtTopLeft.y >= providedY && that.pointerBelongingsAtTopLeft.x >= providedX
                && that.pointerBelongingsAtBottomLeft.y >= providedY && that.pointerBelongingsAtBottomLeft.x >= providedX
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtRightTop.y <= providedY && that.pointerBelongingsAtRightTop.x <= providedX
            ) {
                // stack
                // construct preview knot
                // drawLineFromBottomStatement

                // drawLineAtFrontStatement
                // drawLineAtProfileStatement

                // pencil.draw()
                // keep !
            }
            // use double save
        })

        // keep knotFromBottomStatement

        return knotFromBottomStatement
    }

    that.useCtx = function (ctx) {
        let knotFromBottomStatement = that
        // keep
        that.ctx = ctx

        return knotFromBottomStatement
    }

    that.takeCapture = function () {
        let knotFromBottomStatement = that
        // keep

        // use knot relative size
        // use pointer belongings

        pencil.draw()

        return knotFromBottomStatement
    }
    that.provideKnot = function () {
        return that
    }

    that.captureFromBottomStatementAtTopLeft = function (pointerBelongingsAtTopLeft) {
        let knotFromBottomStatement = that
        // keep
        that.pointerBelongingsAtTopLeft = pointerBelongingsAtTopLeft

        // keep !
        return knotFromBottomStatement
    }
    that.captureFromBottomStatementAtBottomLeft = function (pointerBelongingsAtBottomLeft) {
        let knotFromBottomStatement = that
        // keep
        that.pointerBelongingsAtBottomLeft = pointerBelongingsAtBottomLeft

        // keep !
        return knotFromBottomStatement
    }
    that.captureFromBottomStatementAtBottomRight = function (pointerBelongingsAtBottomRight) {
        let knotFromBottomStatement = that
        // keep
        that.pointerBelongingsAtBottomRight = pointerBelongingsAtBottomRight

        // keep !
        return knotFromBottomStatement
    }
    that.captureFromBottomStatementAtRightTop = function (pointerBelongingsAtRightTop) {
        let knotFromBottomStatement = that
        // keep
        that.pointerBelongingsAtRightTop = pointerBelongingsAtRightTop

        // keep !
        return knotFromBottomStatement
    }

    that.useRelativeSize = function (knotRelativeSize, traversar) {
        let knotFromBottomStatement = that
        // keep !

        // use knot relative size
        // use pointer belongings

        return knotFromBottomStatement
    }

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}

function KnotLocateFromBind() {
    let that = this

    // keep !
    // pencil.rememberSample(that.provideKnot())
    let fromEmptySpawnedPointerBelongins = function () {
        // keep
        return null
    }

    let passThrough = function () {
        // keep !
    }
    that.connectedToCanvas = {}
    that.connectedToCanvas.ctx = document.querySelector('.statement-at-front').querySelector('#scene') /* keep ! .getContext('2d') */

    that.passThrough = passThrough

    that.spawnedPointerBelongings = fromEmptySpawnedPointerBelongins()

    that.throughPointerBelongings = function (pointerBelongingsInstance) {
        that.pointerBelongings = pointerBelongingsInstance
    }

    that.assignCoordinates = function () {
        // keep
    }

    that.constructPointerBelongings = function (pointerBelongingsCollectionOfFour) {
        let that = this
        that.throughPointerBelongingsAtTopLeft = pointerBelongingsCollectionOfFour.pointerBelongingsAtTopLeft
        that.throughPointerBelongingsAtBottomLeft = pointerBelongingsCollectionOfFour.pointerBelongingsAtBottomLeft

        that.throughPointerBelongingsAtBottomRight = pointerBelongingsCollectionOfFour.pointerBelongingsAtBottomRight
        that.throughPointerBelongingsAtRightTop = pointerBelongingsCollectionOfFour.pointerBelongingsAtRightTop
    }

    that.assignKnotToKnotAtProfileStatement = function (knotAtProfileStatement) {
        that.throughKnotConnectedToProfile = knotAtProfileStatement
    }

    that.assignKnotToKnotAtFrontStatement = function (knotAtFrontStatement) {
        that.throughKnotConnectedToFront = knotAtFrontStatement
    }

    that.assignKnotToKnotFromBottomStatement = function (knotFromBottomStatement) {
        let knotLocate = that
        // keep !

        knotLocate.throughKnotConnectedToBottomStatement = knotFromBottomStatement
    }
}

function Pencil() {
    let that = this
    // follow viewported-knot-at-knot-labirint

    // keep update-stack
    let knot

    that.passThroughCrowd = function () {
        return that
    }
    that.joinLoop = function () {
        return that
    }
    that.compact = function () {
        return that
    }

    that.drawFromBottom = function () {
        that.draw()
    }

    let knotThrough
    that.intoPointerBelongingsCollection = function () {
        let pointerBelongingsCollectionOfFour = {
            pointerBelongingsAtTopLeft: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtTopLeft,
            pointerBelongingsAtBottomLeft: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft,
            pointerBelongingsAtBottomRight: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtBottomRight,
            pointerBelongingsAtRightTop: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtRightTop
        }

        // keep

        return pointerBelongingsCollectionOfFour
    }
    that.drawThrough = function (knotThroughInstance) {
        knotThrough = knotThroughInstance

        // keep
        // knotThroughInstance.spawnedPointerBelongings
        knotThrough.compute().constructPointerBelongingsFromBottom(knotThrough.spawnedPointerBelongings)
        // take computed pointerBelongings topLeft, bottomLeft, bottomRight, rightTop

        // keep
        return that
    }

    that.useKnot = function (knotInstance) {
        knot = knotInstance
    }

    that.useEchoLocator = function (echoLocator) {
        that.echoLocator = echoLocator
        // keep !
        that.echoLocator.usePointerBelongings(knot.pointerBelongings)
        that.echoLocator.useRelativeSize(knot)

        // keep
        that.echoLocator.connectTo(knot)
    }
    // keep !


    // keep bind-stack !

    let scene = this

    // queueKnot
    let dictQueueKnot = {}

    let queueKnot = []

    let chosenScene

    let takeOne = function (arr) {
        return arr.splice(arr.length - 1, 1)[0]
    }

    that.constructKnot = function () {
        return takeOne(dictQueueKnot[chosenScene])
    }

    that.rememberSample = function (scene, knot) {
        // keep
        if(dictQueueKnot[scene]) {
            // keep !
        } else {
            dictQueueKnot[scene] = []
        }
        dictQueueKnot[scene].push(knot)
    }

    that.useScene = function (providedScene) {
        chosenScene = providedScene
    }

    that.putKnotConnectedToBottomStatement = function (knotInstance) {
        // pencil verifies that it is connected to bottom-statement
        queueKnot.push(knotInstance)
    }

    that.provideScene = function () {
        return scene
    }

    let viewportPosition

    that.useViewport = function (viewportPointerBelongingsAtVerticalPosition, viewportPointerBelongingsAtDistance, viewportPointerBelongingsAtHorizontalPosition) {
        let localViewport = JSON.parse(JSON.stringify({
            atVerticalPosition: viewportPointerBelongingsAtVerticalPosition,
            atDistance: viewportPointerBelongingsAtDistance,
            atHorizontalPosition: viewportPointerBelongingsAtHorizontalPosition
        }))
        // keep

        viewportPosition = localViewport
    }

    that.draw = function () {
        // knotFromCubicProject

        // keep !

        // and there. it is program way, knot human way
        for(let i = 0; i < queueKnot.length; i++) {
            // chosen scene we take to ourself
            // it is a memory protection and a protection from high coupling
            queueKnot[i]['passThrough'](queueKnot[i]['spawnedPointerBelongings'])
        }

        // pointerBelongings
    }

    // bind !
}