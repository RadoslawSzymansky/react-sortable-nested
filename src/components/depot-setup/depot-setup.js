import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { StyledBlockWrapper, StyledParentWrapper, StyledGroup, StyledDepotWrapper } from './depot-setup.styled';

const sortableOptions = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: "ghost",
  group: "shared"
};

export default function DepotSetup() {
  const [blocks, setBlocks] = useState([
    {
      id: 'fuse_1',
      content: "Fuse 1",
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
    // validate stage
    setBlocks(newBlocksList);
  };

  return (
    <>
      <h2 style={{ marginLeft: 15 }}>Depot Setup</h2>
      <StyledDepotWrapper>
        <StyledParentWrapper main>
          Main Fuse
        </StyledParentWrapper>
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
      </StyledDepotWrapper>
    </>
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
      <StyledGroup>
        <StyledParentWrapper>
          {block.content}
        </StyledParentWrapper>
        <Container
          block={block}
          setBlocks={setBlocks}
          blockIndex={blockIndex}
        />
      </StyledGroup>
    );
  } else {
    return (
      <StyledBlockWrapper>
        {block.content}
      </StyledBlockWrapper>
    );
  }
}
