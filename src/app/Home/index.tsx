import { Image, View, TouchableOpacity, Text} from 'react-native';
import { Input } from '../components/Input';
import { Button } from "@/app/components/Button"
import { Filter } from "@/app/components/Filter"

import { styles } from './styles';
import { FilterStatus } from '@/types/FilterStatus';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/assets/logo.png")}
      />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?"/>
        <Button title="Adicionar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          { FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>

        </View>
      </View>
      
    </View>
  );
}

;
