import React from 'react'
import CopyBlock from './CopyBlock'
function Install() {
  return (
    <div>
      <CopyBlock text="npx shadcn@latest add https://island-wine.vercel.app/Island.json" />
    </div>
  )
}

export default Install
