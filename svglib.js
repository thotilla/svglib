let svg_ids = ["id_0"];

function getSvgId() {

    //console.log("Ich bin doch drin");
    //Länge des Arrays svg_ids abfragen
    //die Länge ist immer um eins größer als der Index
    //das ist praktisch für die Vergabe neuer IDs
    let id_len = svg_ids.length;
    
    //eine neue ID ergibt sich als Kombination des Strings id_ und des aktellen
    //Indexes
    let id = "id_" + id_len;
    
    //diese neue ID wird auch wieder in svg_ids abgespeichert und damit das Array vergrößert
    svg_ids[id_len] = id;

    console.log("Ich bin doch drin", svg_ids);
    return id;

}


//https://www.w3.org/TR/SVG11/shapes.html#CircleElement
function circle(cx, cy, r) {

    this.cx = cx;
    this.cy = cy;
    this.r = r;
    this.id = getSvgId();
    //this.id = 'idnew';
    //this.testid = getSvgId();

    //Presentation attributes
    this.alignment-baseline = "";
    this.baseline-shift = "";
    this.clip = "";
    this.clip-path = "";
    this.clip-rule = "";
    this.color = "";
    this.color-interpolation = "";
    this.color-interpolation-filters = "";
    this.color-profile = "";
    this.color-rendering = "";
    this.cursor = "";
    this.direction = "";
    this.display = "";
    this.dominant-baseline = "";
    this.enable-background = "";
    this.fill = "";
    this.fill-opacity = "";
    this.fill-rule = "";
    this.filter = "";
    this.flood-color = "";
    this.flood-opacity = "";
    this.font-family = "";
    this.font-size = "";
    this.font-size-adjust = "";
    this.font-stretch = "";
    this.font-style = "";
    this.font-variant = "";
    this.font-weight = "";
    this.glyph-orientation-horizontal = "";
    this.glyph-orientation-vertical = "";
    this.image-rendering = "";
    this.kerning = "";
    this.letter-spacing = "";
    this.lighting-color = "";
    this.marker-end = "";
    this.marker-mid = "";
    this.marker-start = "";
    this.mask = "";
    this.opacity = "";
    this.overflow = "";
    this.pointer-events = "";
    this.shape-rendering = "";
    this.stop-color = "";
    this.stop-opacity = "";
    this.stroke = "";
    this.stroke-dasharray = "";
    this.stroke-dashoffset = "";
    this.stroke-linecap = "";
    this.stroke-linejoin = "";
    this.stroke-miterlimit = "";
    this.stroke-opacity = "";
    this.stroke-width = "";
    this.text-anchor = "";
    this.text-decoration = "";
    this.text-rendering = "";
    this.unicode-bidi = "";
    this.visibility = "";
    this.word-spacing = "";
    this.writing-mode = "";



    //Methode zur Erzeugung eines Kreises
    //create mit createElement und setAttribute funktioniert nicht
    //man muss createElementNS und setAttributeNS verwenden und svgns definieren
    //kann daran liegen, dass SVG xml ist und kein html
    this.createCircle = function() {
        console.log("neuen Kreis setzen");
        var svgns = "http://www.w3.org/2000/svg",
            container = document.getElementById('svg');
        var newCircle = document.createElementNS(svgns, 'circle');
        newCircle.setAttributeNS(null, 'cx', this.cx);
        newCircle.setAttributeNS(null, 'cy', this.cy);
        newCircle.setAttributeNS(null, 'r', this.r);
        newCircle.setAttributeNS(null, 'fill', 'blue');
        newCircle.setAttributeNS(null, 'id', this.id);
        container.appendChild(newCircle);
    }

    //Methode zum Setzen der Inhaltsfarbe
    //Problem: wie spreche ich das Element an?
    this.setFill = function(colour) {
        document.getElementById(this.id).setAttributeNS(null, 'fill', colour);
    }


    this.printVar = function() {
        console.log("x-Punkt: ", cx);
        console.log("y-Punkt: ", cy);
        console.log("Radius: ", r);
        console.log("ID: ", this.id);
        //console.log("Test-ID: ", this.testid);
    };

    this.addCircles = function() {
        console.log('Jetzt kommen ein paar Kreise')
        var svgns = "http://www.w3.console.log('IDkommethis.id eorg/2000/svg",
            container = document.getElementById('cont');
        for (var x = 0; x < 500; x += 50) {
            for (var y = 0; y < 300; y += 50) {
                var circle = document.createElementNS(svgns, 'circle');
                circle.setAttributeNS(null, 'cx', x);
                circle.setAttributeNS(null, 'cy', y);
                circle.setAttributeNS(null, 'r', 50);
                circle.setAttributeNS(null, 'style', 'fill: none; stroke: blue; stroke-width: 1px;');
                container.appendChild(circle);
            }
        }
    }

}


//Methode zum Setzen der Inhaltsfarbe (und andere setter-Methoden)
//Problem: wie spreche ich das Element an?
//setAttributeNS(null, 'fill', colour); gibt eine Fehlermeldung, ich nrauche ein konkretes Element
//Lsg: ich vergebe eine class-id, die gleichzeitig die id des SVG-Elementes ist
// this.setFill = function(colour) {
//     document.getElementById(this.id).setAttributeNS(null, 'fill', colour);
// }