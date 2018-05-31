function addTitleToSVGData(svg) {
  if (!svg.data || !svg.title || !svg.size) {
    console.log("Uh oh!", svg)
    return svg;
  }
  return Object.assign(svg, { data: svg.data.replace('___###NAME###___', svg.title)} );
}

module.exports = addTitleToSVGData;