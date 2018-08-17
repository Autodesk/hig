import React from "react";

export default [
  {
    description: "default",
    getProps: () => ({
      title: "Default Modal",
      open: true,
      style: "standard",
      children: [
        <p key="p">
          Curabitur id auctor leo, ut posuere felis. Aliquam erat volutpat.
          Nullam id lorem in metus fermentum aliquam.
        </p>
      ]
    })
  },
  {
    description: "scrolling",
    getProps: () => ({
      title: "Scrolling Demo",
      open: true,
      style: "alternate",
      children: [
        <p key="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          mattis neque. Proin ipsum ex, hendrerit ac egestas at, consectetur nec
          lorem. Donec finibus eu est in pretium. Praesent id sollicitudin
          ligula. Praesent eu iaculis urna. Mauris lacinia eleifend neque in
          consequat. Nam et viverra dolor. Suspendisse ultricies fermentum
          nulla. Sed id felis bibendum, elementum mauris eget, iaculis massa.
          Nulla condimentum ex et dignissim faucibus. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. In
          malesuada arcu sed tortor pharetra faucibus. Aliquam rutrum odio
          sapien, vel porta velit auctor id. Curabitur quis ligula libero.
          Quisque arcu leo, vehicula vel ligula finibus, consectetur dictum
          sapien. Proin blandit eu lectus vitae viverra. Vivamus risus tellus,
          dapibus sed aliquam at, sodales tincidunt tortor. Proin ut
          pellentesque arcu, at malesuada dui. Aenean a diam dui. Morbi auctor
          scelerisque nulla. Sed ac consectetur ipsum. Vestibulum sit amet velit
          mi. Praesent vel efficitur est, at accumsan tellus. Nam bibendum
          accumsan nibh, nec dapibus massa tristique vel. Phasellus ut erat in
          massa sollicitudin luctus. Morbi dignissim, dui ac consectetur
          commodo, sapien erat condimentum justo, ultrices sollicitudin risus
          magna non felis. Morbi fringilla pellentesque fringilla. Pellentesque
          vestibulum nibh ut mi interdum imperdiet. Sed vitae ex purus.
          Pellentesque lobortis tellus nec turpis tempor viverra. Vivamus quis
          blandit sem. Vestibulum facilisis rhoncus fermentum. Mauris mattis a
          velit at ultrices. Suspendisse potenti. Suspendisse id magna sed ipsum
          imperdiet tincidunt eget sed erat. Donec sit amet augue nec felis
          placerat scelerisque. Aliquam dapibus odio magna, at iaculis nunc
          interdum eu. Proin in porttitor eros, sit amet interdum lectus. Mauris
          mattis magna quis feugiat egestas. Aenean non ultrices est. Phasellus
          semper augue vel elit placerat, in placerat dui egestas. Sed eu turpis
          eleifend, viverra libero elementum, vehicula ante. Vivamus fringilla
          in mi ac iaculis. Nunc facilisis at orci vel ullamcorper. In placerat
          finibus elit vulputate ullamcorper. Suspendisse congue nisi at ornare
          molestie. Mauris rhoncus, justo nec porttitor rutrum, nisl massa
          tincidunt justo, id pharetra dui dolor vitae risus. Aenean vulputate
          sagittis felis. Quisque tempus magna vel mi maximus sollicitudin.
          Mauris ac pulvinar sem, sed laoreet eros. Pellentesque dignissim
          turpis in dolor mattis ultrices. Mauris nec nulla eu nunc molestie
          bibendum ut eget nibh. Etiam ac diam vel ex imperdiet blandit. Cras
          enim leo, consectetur ut turpis ac, ultricies suscipit neque. Duis sit
          amet feugiat quam. Nullam mi eros, tempus id interdum rutrum, gravida
          nec urna. Integer volutpat, velit et vulputate blandit, libero turpis
          rutrum ligula, vel imperdiet est urna in tellus. Curabitur id auctor
          leo, ut posuere felis. Aliquam erat volutpat. Nullam id lorem in metus
          fermentum aliquam.
        </p>
      ]
    })
  },
  {
    description: "header children",
    getProps: () => ({
      headerChildren: [<p key="p1">HI</p>],
      open: true,
      style: "alternate",
      children: [
        <p key="p2">
          Etiam ac diam vel ex imperdiet blandit. Cras enim leo, consectetur ut
          turpis ac, ultricies suscipit neque. Duis sit amet feugiat quam.
          Nullam mi eros, tempus id interdum rutrum, gravida nec urna. Integer
          volutpat, velit et vulputate blandit, libero turpis rutrum ligula, vel
          imperdiet est urna in tellus. Curabitur id auctor leo, ut posuere
          felis.
        </p>
      ]
    })
  }
];
