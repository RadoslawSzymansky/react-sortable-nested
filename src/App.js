import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import styled from "styled-components";
import "./styles.css";

const StyledBlockWrapper = styled.div`
  position: relative;
  background: white;
  padding: 20px 0 20px 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: move;
  border: 1px solid lightgray;
  &:hover {
    //background: #eeeeee;
  };
`;

const StyledWrapper = styled.div`
    width: calc(100% - 20px);
    position: relative;
    padding: 20px;
    left: -20px;
    background: #eee;
    margin-bottom: 10px;
    border: 1px solid lightgray;
`;

const StyledDropable = styled.div`
    padding-left: 20px;
`;

const sortableOptions = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: "ghost",
  group: "shared"
};

export default function App() {
  const [blocks, setBlocks] = useState([
    {
      id: 'fuse_1',
      content: "Fuse 1",
      parent_id: null,
      type: "fuse",
      children: [
        {
          id: 'cs_1',
          content: "Charging station 1",
          type: "charging_station",
        },
        {
          id: 'sl_1',
          content: " Siteload 1",
          type: "siteload",
        },
        {
          id: 'fuse_3',
          content: "Fuse 3",
          type: "fuse",
          children: [
            {
              id: 'sl_2',
              content: " Siteload 2",
              type: "siteload",
            },
          ]
        }
      ]
    },
    {
      id: 'cs_2',
      content: "Charging station 2",
      type: "charging_station",
    },
    {
      id: 'sl_2',
      content: " Siteload 2",
      type: "siteload",
    },
    {
      id: 'fuse_2',
      content: "Fuse 2",
      type: "fuse",
      children: []
    }
  ]);
  const setBlocksFn = (newBlocksList) => {
    console.log(newBlocksList);

    setBlocks(newBlocksList);
  };

  return (
    <div style={{ marginLeft: 20 }}>
      <StyledWrapper>
        Main Fuse
      </StyledWrapper>
      <>

        <ReactSortable
          list={blocks}
          setList={setBlocksFn}
          {...sortableOptions}
        >
          {blocks.map((block, blockIndex) => (
            <BlockWrapper
              key={block.id}
              block={block}
              blockIndex={[blockIndex]}
              setBlocks={setBlocksFn}
            />
          ))}
        </ReactSortable>
      </>
    </div>
  );
}
function Container({ block, blockIndex, setBlocks }) {
  return (
    <>
      <ReactSortable
        key={block.id}
        list={block.children}
        setList={(currentList) => {
          setBlocks((sourceList) => {
            const tempList = [...sourceList];
            const _blockIndex = [...blockIndex];
            const lastIndex = _blockIndex.pop();
            const lastArr = _blockIndex.reduce(
              (arr, i) => arr[i]["children"],
              tempList
            );
            lastArr[lastIndex]["children"] = currentList;
            return tempList;
          });
        }}
        {...sortableOptions}
      >
        {block.children &&
          block.children.map((childBlock, index) => {
            return (
              <BlockWrapper
                key={childBlock.id}
                block={childBlock}
                blockIndex={[...blockIndex, index]}
                setBlocks={setBlocks}
              />
            );
          })}
      </ReactSortable>
    </>
  );
}
function BlockWrapper({ block, blockIndex, setBlocks, isNested }) {
  if (!block) return null;
  if (block.type === "fuse") {
    return (
      <StyledDropable>
        <StyledWrapper>
          {block.content}
        </StyledWrapper>

        <Container
          block={block}
          setBlocks={setBlocks}
          blockIndex={blockIndex}
        />
      </StyledDropable>
    );
  } else {
    return (
      <StyledBlockWrapper>
        {block.content}
      </StyledBlockWrapper>
    );
  }
}
