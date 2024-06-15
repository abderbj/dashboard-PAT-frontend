import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

const ArticleList = ({ articles, setCurrentArticle }) => {
  const [visibleArticles, setVisibleArticles] = useState(5);

  const voirPlusHandler = () => {
    setVisibleArticles(visibleArticles + 5);
  };

  return (
    <Box 
      sx={{
        maxWidth: 400,
        padding: 2,
        backgroundColor: '#f4f6f8',
        borderRadius: 2,
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
      className='ArticleListContainer'
    >
      <Typography variant="h5" sx={{ marginBottom: 2, fontFamily: 'Nunito Sans, sans-serif' }}>Articles</Typography>
      
      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: 2,
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          marginBottom: 2,
          padding: 2,
        }}
      >
        <Button
          variant="contained"
          
          sx={{ marginBottom: 2, fontSize: 16, fontFamily: 'Nunito Sans, sans-serif', textTransform: 'none', backgroundColor: '#019add' ,padding: '10px 40px', borderRadius: 3}}
        >
          + Ajouter un Article
        </Button>
        <Typography variant="h6" 
          sx={{ marginBottom: 2, fontFamily: 'Nunito Sans, sans-serif', textAlign: 'left', fontWeight: 600, color: '#202224', fontSize: 22 }}
        >
          Articles récentes
        </Typography>
        <List sx={{
            maxHeight: 400, 
            overflowY: 'auto' ,
        }} >
          {articles.slice(0, visibleArticles).map(article => (
            <ListItem key={article.id} button onClick={() => setCurrentArticle(article)}>
              <ListItemAvatar>
                <Avatar src={article.imageUrl} />
              </ListItemAvatar>
              <ListItemText primary={article.title} />
            </ListItem>
          ))}
        </List>
        <Button
          variant="text"
          sx={{
            marginTop: 2,
            padding: '10px 20px',
            fontSize: 16,
            backgroundColor: 'rgba(226, 234, 248, 1)',
            color: '#202224',
            textTransform: 'none',
            fontFamily: 'Nunito Sans, sans-serif',
            borderRadius: 3,
          }}
          onClick={voirPlusHandler}
        >
          Voir plus
        </Button>
      </Box>
    </Box>
  );
};

export default ArticleList;
