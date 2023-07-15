import styled from 'styled-components';

export const StyledTodoList = styled.ul`
 padding-right: 1rem;
 display: flex;
 flex-direction: column;
 gap: 1rem;
 width: 100%;
 height: 256.5px;
 overflow-y: auto;
 scroll-behavior: smooth;

::-webkit-scrollbar {
    width: .75rem;
}

::-webkit-scrollbar-track {
    border-radius: 14px;
    border: 1.75px solid ${(props) => (props.theme.palette.default.main)};
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${(props) => (props.theme.palette.default.main)};
}
`;
