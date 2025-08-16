import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import recipes from '@/data/recipes.json';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Recipe not found!</ThemedText>
      </ThemedView>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: recipe.name }} />
      <ScrollView style={styles.container}>
        <Image source={{ uri: recipe.image }} style={styles.headerImage} />
        <ThemedView style={styles.contentContainer}>
          <ThemedText type="title">{recipe.name}</ThemedText>

          <ThemedText type="subtitle" style={styles.sectionTitle}>Ingredients</ThemedText>
          {recipe.ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientContainer}>
                <ThemedText style={styles.bulletPoint}>{'\u2022'}</ThemedText>
                <ThemedText style={styles.ingredient}>{ingredient}</ThemedText>
            </View>
          ))}

          <ThemedText type="subtitle" style={styles.sectionTitle}>Instructions</ThemedText>
          {recipe.instructions.map((instruction, index) => (
             <View key={index} style={styles.instructionContainer}>
                <ThemedText style={styles.instructionStep}>{`${index + 1}. `}</ThemedText>
                <ThemedText style={styles.instruction}>{instruction}</ThemedText>
            </View>
          ))}
        </ThemedView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerImage: {
        width: '100%',
        height: 250,
    },
    contentContainer: {
        padding: 16,
    },
    sectionTitle: {
        marginTop: 24,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: Colors.light.icon,
        paddingBottom: 4,
    },
    ingredientContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    bulletPoint: {
        marginRight: 8,
        fontSize: 16,
    },
    ingredient: {
        fontSize: 16,
        flex: 1,
    },
    instructionContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    instructionStep: {
        marginRight: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    instruction: {
        fontSize: 16,
        flex: 1,
    },
});
