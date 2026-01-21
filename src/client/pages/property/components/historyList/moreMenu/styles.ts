import { styled } from "@linaria/react";

const PopoverContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;

  border-bottom: 1px solid var(--border);
`;

const MoreButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 16px;

  min-width: 220px;
  background-color: transparent;
  border: none;

  color: var(--text-body);
  border-radius: var(--rounded-inputs);
  text-decoration: none;

  font-size: 14px;
  line-height: 14px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    color: rgb(var(--spotlight-primary));
    background-color: var(--card-foreground-primary);
  }

  &.danger {
    color: rgb(var(--spotlight-danger));
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;

export { MoreButton, PopoverContent };
