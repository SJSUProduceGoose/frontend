<script setup>
const route = useRoute();
// When accessing /posts/1, route.params.id will be 1
console.log(route.params.slug);
const results = useFetch(`https://produce-goose-backend-stg.herokuapp.com/product/list?category=${route.params.slug}`);
</script>