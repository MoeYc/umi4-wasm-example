import React from 'react';

import("../../public/rocket/index.js")
.then((module) => {
  console.log('成功使用wasm')
})

export default function IndexPage() {
   return (
     <div>
       <h1 >111</h1>
     </div>
   );
 }
 