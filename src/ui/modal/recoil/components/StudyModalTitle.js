import styled from 'styled-components'

export default function StudyModalTitle({
  date,
  titleText,
  buttonText,
  onClick,
}) {
  return (
    <Wrapper>
      <Title>
        {date} {titleText}
      </Title>
      <Button onClick={onClick}>{buttonText}</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: black;
`
const Button = styled.button``
