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

points.gussetLeft = new Point(0,0)
points.gussetRight = new Point(0,150)
points.gussetBottomLeft = new Point(150,0)
points.gussetBottomRight = new Point(150,150)

paths.gusset = new Path()
    .move(points.gussetRight)
    .line(points.gussetLeft)
    .line(points.gussetBottomLeft)
    .line(points.gussetBottomRight)
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