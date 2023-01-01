import styled from 'styled-components';

export const NameActor = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 500;
`;
export const ActorItem = styled.li`
  padding: 2px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const GalleryCast = styled.ul`
  margin-top: 10px;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
