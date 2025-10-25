import React from 'react'
import {alpha, Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{ // стили для слайдера // пишет студент
        color: '#00CC22',
        width: '150px',
        '& .MuiSlider-rail' : {
          color: '#8b8b8b',
          opacity: '1'
        },
        '& .MuiSlider-thumb': {
          width: '18px',
          height: '18px',
          border: '6px solid #fff',
          outline: '1px solid #00CC22',
          '&:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 6px ${alpha('#00CC22', 0.16)}`,
          },
          '&.Mui-active': {
            boxShadow: `0px 0px 0px 9px ${alpha('#00CC22', 0.16)}`,
          },

        },


      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
