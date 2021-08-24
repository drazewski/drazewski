import React from "react"
import styled from "styled-components"
import { colors } from '../shared/constants';

const Date = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.textLight};
  font: 12px Lora;
`

const PostDate = ({ date }) => <Date>{date}</Date>;

export default PostDate;