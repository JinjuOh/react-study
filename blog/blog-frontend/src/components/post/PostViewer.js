import React from 'react';
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import TagBox from "../write/TagBox";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";

const PostViewBlock = styled.div`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;


const PostViewer = ({post, error, loading}) => {
    // 에러 발생 시
    if(error) {
        if(error.response && error.response.status === 404) {
            return <PostViewBlock>존재하지 않는 포스트입니다.</PostViewBlock>;
        }
        return <PostViewBlock>오류 발생!</PostViewBlock>;
    }
    // 로딩 중이거나 아직 포스트 데이터가 없을 때
    if(loading || !post) {
        return null;
    }

    const { title, body, user, publishedDate, tags } = post;
    return (
        <PostViewBlock>
            <PostHead>
                <h1>{title}</h1>
                <SubInfo username={user.username} publishedDate={publishedDate} hasMarginTop/>
                <Tags tags={tags}/>
            </PostHead>
            <PostContent dangerouslySetInnerHTML={{ __html: body}}></PostContent>
        </PostViewBlock>
    );
};

export default PostViewer;
