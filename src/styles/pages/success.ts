import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,
<<<<<<< HEAD

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',

    marginTop: '2rem',

    lineHeight: 1.4,
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    fontWeight: 'bold',

    textDecoration: 'none',

    '&:hover': {
      color: '$green300',
    },
  },
=======
>>>>>>> 3ff92c2df3344a1d0564b034458537a01a3fd189
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%,  #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

<<<<<<< HEAD
  marginTop: '4rem',

=======
>>>>>>> 3ff92c2df3344a1d0564b034458537a01a3fd189
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
