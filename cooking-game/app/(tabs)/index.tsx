import { StyleSheet, FlatList, Pressable, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import recipes from '@/data/recipes.json';
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Let's Get Cookin'!</ThemedText>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/recipe/${item.id}`} asChild>
            <Pressable>
              <ThemedView style={styles.recipeItem}>
                <Image source={{ uri: item.image }} style={styles.recipeImage} />
                <ThemedText style={styles.recipeName}>{item.name}</ThemedText>
              </ThemedView>
            </Pressable>
          </Link>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    marginVertical: 16,
    textAlign: 'center',
  },
  recipeItem: {
    backgroundColor: Colors.light.background,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  recipeImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
