export default function (part) {
    let {
      options,
      Point,
      Path,
      points,
      paths,
      Snippet,
      snippets,
      complete,
      sa,
      paperless,
      macro,
      measurements,
  
    } = part.shorthand()
//design pattern here

let sleeveWidth = measurements.biceps + (100 * options.bicepsEase)

let sleeveLength = measurements.shoulderToElbow * options.sleeveBonus

points.sleeveLeft = new Point(0, 0)
points.sleeveRight = new Point(0, sleeveWidth)
points.sleeveBottomLeft = new Point(sleeveLength, 0)
points.sleeveBottomRight = new Point(sleeveLength, sleeveWidth)

paths.sleeve = new Path()
.move(points.sleeveRight)
.line(points.sleeveLeft)
.line(points.sleeveBottomLeft)
.line(points.sleeveBottomRight)
.close();



      // Complete?
  if (complete) {
    

    if (sa) {
      
    }
  }

  // Paperless?
  if (paperless) {
    
  }

  return part
}