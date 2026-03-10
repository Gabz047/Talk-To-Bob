 import { useEffect, useState } from "react"
 
 export function useGetMousePosition(){
      const [position, setPosition] = useState<Record<string, number>>({x: 0, y: 0})
  
      useEffect(() => {
          const handleMove = (e: MouseEvent) => {
              setPosition({x: e.clientX, y: e.clientY})
          }
  
          window.addEventListener('mousemove', handleMove)
  
          return () => window.removeEventListener('mousemove', handleMove)
      }, [])

      return position
  }