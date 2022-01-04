import styled from 'styled-components';

export const ChatContainer = styled.div`
  overflow-y: scroll;
  margin: 2rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 7%;
  margin-top: 5px;
  align-items: flex-end;

  ${(props) =>
    !props.position &&
    `
      align-items: flex-start;
    `}
`;
export const Message = styled.div`
  font-size: 1.42rem;
  line-height: 1.5rem;
  position: relative;
  min-width: 10%;
  max-width: 20%;
  word-break: break-word;
  padding: 1.3rem;
  font-family: inherit;
  background: #1e90ff;
  font-weight: bold;
  border-radius: 16px;
  color: white;
  ${(props) =>
    !props.position &&
    `
      align-items: flex-start;
  background: #333;
  color: rgba(255,255,255,0.7);

    `}
  position: relative;
  margin-bottom: 1rem;
  /* color: inherit; */
`;

export const SeenIcon = styled.div`
  position: absolute;
  bottom: -10px;
  right: 5px;
`;
export const Chat = styled.span`
  display: block;
  font-size: 1.7rem;
  color: ${(props) => props.theme.color};
  /* font-family: 'NimbusSanTW01Con'; */
  font-weight: 300;
  word-wrap: break-word;
  // text-transform: capitalize;
  /* margin-bottom: 2rem; */
`;
