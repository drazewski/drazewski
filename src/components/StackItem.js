import React from "react";
import styled from "styled-components";
import { colors } from "../shared/constants";

const Score = styled.div`
	font-size: 12px;
	font-weight: normal;
	line-height: 1.3;
	text-align: center;
	color: ${props => props.isAccepted ? '#fff' : colors.textSecondary};
	min-width: 36px;
	max-width: 40px;
	height: auto;
	padding: 3px 6px;
	margin-right: 10px;
	display: inline-block;
	padding: 3px 0;
	background-color: ${props => props.isAccepted ? '#5eba7d' : '#f1f2f3'};
	border-radius: 3px;
	font-family: 'Open sans';
`;

const Flex = styled.div`
	display: flex;
	align-items: flex-start;
	padding-bottom: 10px;
`;

const Text = styled.a`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	font-family: 'Open sans';
	font-size: 13px;
	color: ${colors.darkBlue};
	padding-bottom: 2px;
	line-height: 1.2;

	&:hover {
		color: ${colors.lightBlue};
	}
`;



const StackItem = ({ score, isAccepted, id, link, title }) => {
	return (
		<Flex>
			<Score isAccepted={isAccepted}>{score}</Score>
			<Text href={link}>{title}</Text>
		</Flex>
	);
};

export default StackItem;